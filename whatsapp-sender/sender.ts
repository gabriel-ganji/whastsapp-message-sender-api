import { create, Whatsapp, Message, SocketState} from "venom-bot";

class Sender {
   
    private client: Whatsapp;

    constructor() {

        this.initialize();
    
    }

    async sendText(number: string, body: string) {
        
        //5511959050868@c.us

        await this.client.sendText(number, body);
    
    }

    private initialize() {

        const qr = (base64Qrimg: string) => {};

        const status = (statusSession: string) => {};

        const start = (client: Whatsapp) => {
            this.client = client;
        };

        create('ws-sender-dev', qr, status)
            .then((client) => start(client))
            .catch((error) => console.log(error));
    }

}

export default Sender;