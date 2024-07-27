<?php
function getConfig($configFile) {
    if (file_exists($configFile)) {
        return nl2br(htmlspecialchars(file_get_contents($configFile)));
    } else {
        return "Configuration file not found: $configFile\n";
    }
}

$mailServers = [
    'Postfix' => '/etc/postfix/main.cf',
    'Sendmail' => '/etc/mail/sendmail.cf',
    'Exim' => '/etc/exim4/exim4.conf'
];

foreach ($mailServers as $server => $configFile) {
    echo "<h2>$server Configuration</h2>";
    echo getConfig($configFile);
    echo "<hr>";
}

// Additional command-line based retrieval for Postfix
echo "<h2>Postfix Configuration (command-line)</h2>";
$output = [];
exec('postconf -n', $output);
echo nl2br(htmlspecialchars(implode("\n", $output)));
?>
