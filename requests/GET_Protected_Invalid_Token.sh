curl --request GET \
    --url 'https://breno-backend-mongodb.vercel.app/secureExampleRoute' \
    --header 'Authorization: Bearer invalid-token'

read -p "Pressione qualquer tecla para sair..."