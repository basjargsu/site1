<?php
function template_first_part($title) {
  echo '
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="Description" content="Italy photo workshops.
            Venetian Light and Life: From Within - ICP Travel Programs 2011. Director: Holly Smith Pedlosky"/>
      <meta content="italy, photo, workshops" name="keywords"/>
      <title>' . $title . '</title>
      <link rel="stylesheet" href="style.css">
      <script src="scripts.js"></script>
  </head>
  <body>
    <div id = "page">
 ';
  include("header.html");

}

function template_last_part() {
  echo '  </div>
  </body>
  </html>
  ';
}
?>

