<!DOCTYPE html>
<html>
<head>
    <title>Verificar Colchetes</title>
</head>
<body>

    <h1>Verificar Ordem dos Colchetes</h1>

    @if(isset($resultado))
        <p>Resultado: {{ $resultado ? 'Válido' : 'Inválido' }}</p>
    @endif

    <form method="post" action="/check-colchetes">
        @csrf
        <label for="texto">Insira o texto:</label>
        <input type="text" name="texto" value="{{ isset($entrada) ? $entrada : '' }}">
        <button type="submit">Verificar</button>
    </form>

</body>
</html>