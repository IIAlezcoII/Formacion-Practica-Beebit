package Cliente;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;

public class Cliente implements Runnable {
    
    public static void main(String[] args) throws IOException{      
        
    }
    
    private int puerto;
    private String mensaje;
    
    public Cliente(int p, String msg){
        puerto = p;
        mensaje = msg;
    }

    @Override
    public void run() {
        
        final String HOST = "127.0.0.1";
        final int PUERTO = 5000;
        
        DataOutputStream out;
        
        try{
            Socket sc = new Socket(HOST, PUERTO);
            out = new DataOutputStream(sc.getOutputStream());

            out.writeUTF(mensaje);

            sc.close();
        }catch(IOException e){
            
        }
        
       
        
    }
    
}
