import Sender from "../whatsapp-sender/sender";
import express, {Request, Response} from "express";

const sender = new Sender();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.get("/status", (req: Request, res: Response) => {
    //...
})

app.post("/send", async(req: Request, res: Response) => {
    
    const {number, message}  = req.body;

    try {
    
        await sender.sendText(number, message);
        res.json("Mensagem enviada com sucesso!");
    
    } catch(error) {

        console.log(error);
        res.json("Erro")

    }
    
});

app.listen(5454, () => {
    console.log("[:::] Server Running on Port: 5454 [:::]");
})