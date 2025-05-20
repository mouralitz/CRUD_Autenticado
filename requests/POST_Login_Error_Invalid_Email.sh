curl --request POST \
    --url 'https://breno-backend-mongodb.vercel.app/users/login' \
    --header 'Content-Type: application/json' \
    --data '{
        "email": "outro-email@example.com",
        "password": "coxinha123"
    }'

read -p "Pressione qualquer tecla para sair..."