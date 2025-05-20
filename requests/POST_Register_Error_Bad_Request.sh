curl --request POST \
    --url 'https://breno-backend-mongodb.vercel.app/users/register' \
    --header 'Content-Type: application/json' \
    --data '{
        "name": "Breno Moura",
        "email": "breno@example.com"
    }'

read -p "Pressione qualquer tecla para sair..."