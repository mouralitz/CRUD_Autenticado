curl --request POST \
    --url 'https://crud-autenticado-coral.vercel.app/api/tasks' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTlmZjZkZjlmODk4YTNkMzBkZDgyNSIsImlhdCI6MTc0Nzc1Nzg1OCwiZXhwIjoxNzQ3NzYxNDU4fQ.DFpBaV5NsgKNYD4bIGvM7M3Eshg4xoNv5LRWSCjIeVA' \
    --data '{
        "title": "Estudar Node.js",
        "description": "Assistir aulas e praticar exemplos."
    }'

read -p "Pressione qualquer tecla para sair..."