curl --request POST \
    --url 'https://crud-autenticado-coral.vercel.app/todos' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTlmZjZkZjlmODk4YTNkMzBkZDgyNSIsImlhdCI6MTc0Nzc1MDAzMywiZXhwIjoxNzQ3NzUzNjMzfQ.EyK2vXDVfF_5-747H0fCt89cAT7fdzRNrPzVll2lDR0' \
    --data '{
        "title": "Estudar Node.js",
        "description": "Assistir aulas e praticar exemplos."
    }'

read -p "Pressione qualquer tecla para sair..."