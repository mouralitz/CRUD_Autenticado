curl --request POST \
    --url 'https://crud-autenticado-coral.vercel.app/api/tasks' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTlmZjZkZjlmODk4YTNkMzBkZDgyNSIsImlhdCI6MTc0Nzc1MDk4OSwiZXhwIjoxNzQ3NzU0NTg5fQ.5YjyDAjK0QZtsdJ05buf7juQOpVe4jTv3cLzRsIhHN4' \
    --data '{
        "title": "Estudar Node.js",
        "description": "Assistir aulas e praticar exemplos."
    }'

read -p "Pressione qualquer tecla para sair..."