<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = isset($data['name']) ? trim($data['name']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, phone and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$to = 'maritimempire@gmail.com';
$subject = 'Новая заявка с сайта от ' . $name;

$html_message = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #2563eb;">Новая заявка с сайта Maritime Empire</h2>
    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <p><strong>Имя:</strong> ' . htmlspecialchars($name) . '</p>
        ' . (!empty($company) ? '<p><strong>Компания:</strong> ' . htmlspecialchars($company) . '</p>' : '') . '
        <p><strong>Телефон:</strong> ' . htmlspecialchars($phone) . '</p>
        <p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
        ' . (!empty($message) ? '<p><strong>Сообщение:</strong><br/>' . nl2br(htmlspecialchars($message)) . '</p>' : '') . '
    </div>
    <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
        Заявка получена через форму обратной связи на сайте
    </p>
</body>
</html>
';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: noreply@' . $_SERVER['HTTP_HOST'],
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$success = mail($to, $subject, $html_message, implode("\r\n", $headers));

if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email'
    ]);
}
?>
