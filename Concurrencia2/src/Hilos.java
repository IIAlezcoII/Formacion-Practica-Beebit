public class Hilos extends Thread {

    public void run(){
        for(int i = 0 ; i < 5; i++){
            System.out.println("Hilo: " + Thread.currentThread().getId() + ": " + i);
            try{
                Thread.sleep(milis 1000);
            }catch(Exception e){
                System.out.println("Error");
            }
        }
    }

}
