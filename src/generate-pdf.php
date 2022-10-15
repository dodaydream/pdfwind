<?php

require_once('../vendor/autoload.php');

// reference the Dompdf namespace
use Dompdf\Dompdf;

ob_start();
include './pdfwind.php';
$html = ob_get_clean();

$file = fopen('../tmp/pdfwind.html', 'w');

fwrite($file, $html);

define("DOMPDF_FONT_HEIGHT_RATIO", 0.75);
define("DOMPDF_UNICODE_ENABLED", true);
// instantiate and use the dompdf class
$dompdf = new Dompdf([
    'chroot' => __DIR__.'/../'
]);

$dompdf->loadHtml($html);

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream('pdfwind-demo.pdf', [
    'Attachment' => false
]); 