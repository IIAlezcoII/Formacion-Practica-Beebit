package Servidor;
import java.io.DataInputStream;
import java.io.IOException;
import java.net.*;
import java.util.Observable;

public class Servidor extends Observable implements Runnable{

    public static void main(String[] args) throws IOException {
     
        
    }
    
    private int puerto;
    public Servidor(int p){
        puerto = p;
    }

    @Override
    public void run(){
        
        ServerSocket server = null;
        Socket sc = null;
        final int PUERTO = 5000;
        DataInputStream in;
        
        try{
            server = new ServerSocket(PUERTO);
            System.out.println("Servidor iniciado");    

            while(true){
                sc = server.accept();

                System.out.println("Cliente conectado");
                in = new DataInputStream(sc.getInputStream());
                
                String mensaje = in.readUTF();
                System.out.println(mensaje);
                
                this.setChanged();
                this.notifyObservers(mensaje);
                this.clearChanged();

                sc.close();
                System.out.println("Cliente desconectado");

            }
        }   
        catch(IOException e){             
        }
        
    }
    
}
