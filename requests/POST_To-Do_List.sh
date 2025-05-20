curl --request POST \
    --url 'https://crud-autenticado-coral.vercel.app/api/tasks' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTlmZjZkZjlmODk4YTNkMzBkZDgyNSIsImlhdCI6MTc0Nzc1OTYyMywiZXhwIjoxNzQ3NzYzMjIzfQ.fUpk-GIWF7dgbp3r2VbJTVF5jdeLfdodoIRm-Efqnq4
        "title": "Estudar Node.js",
        "description": "Assistir aulas e praticar exemplos."
    }'

read -p "Pressione qualquer tecla para sair..."