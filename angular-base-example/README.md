# Angular Base Example

## Init repository

```
npm init
```

## Add AngularJS

```
npm install angular --save
ln -s node_modules/angular/angular.js .
```

## Add Bootstrap UI

```
npm install angular-ui-bootstrap --save
ln -s node_modules/angular-ui-bootstrap/dist//ui-bootstrap-tpls.js ui-bootstrap.js

npm install bootstrap@3 --save
ln -s node_modules//bootstrap/dist/css/bootstrap.css .
ln -s node_modules//bootstrap/dist/css/bootstrap-theme.css .
```

## Write basic index.html

```
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="bootstrap.css">
<link rel="stylesheet" href="bootstrap-theme.css">
<script src="angular.js"></script>
<script src="ui-bootstrap.js"></script>
<script src="index.js"></script>
</head>
<body>
<div class="container">
    <h1>Hello, world!</h1>
</div>
</body>
</html>
```

