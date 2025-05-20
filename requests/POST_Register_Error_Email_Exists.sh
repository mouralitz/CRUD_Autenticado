curl --request POST \
    --url 'https://breno-backend-mongodb.vercel.app/users/register' \
    --header 'Content-Type: application/json' \
    --data '{
        "username": "Breno Moura",
        "email": "breno@example.com",
        "password": "coxinha123"
    }'

read -p "Pressione qualquer tecla para sair..."