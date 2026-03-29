const app = require('./src/app');
const connectMongo = require("./src/config/mongo");
const dbMySQL = require("./src/config/mysql"); // Importe a config do MySQL

const PORT = 3000;

async function startServer() {
    try {
        // 1. Conecta ao MongoDB
        await connectMongo();
        console.log("MongoDB pronto para uso!");

        // 2. Testa a conexão com o MySQL (opcional, mas recomendado)
        // O pool do mysql2 geralmente conecta sob demanda, mas validar aqui é seguro
        await dbMySQL.query('SELECT 1'); 
        console.log("MySQL pronto para uso!");

        // 3. Inicia o servidor Express
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta: ${PORT}`);
        });
        
    } catch (error) {
        console.error("❌ Falha ao iniciar o servidor:", error.message);
        process.exit(1); // Encerra o processo se houver erro crítico
    }
}

startServer();