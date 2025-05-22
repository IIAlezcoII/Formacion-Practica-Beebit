public class HiloThread extends Thread {

    private java.lang.Object System;

    public void run(){
        for(int i = 0 ; i < 5; i++){
            System.out.println("Hilo: " + Thread.currentThread().getId() + ": " + i);
            try{
                Thread.sleep(millis 1000);
            }catch(Exception e){
                System.out.println("Error");
            }
        }
    }

    public static void main(String[] args){
        HiloThread hilo1 = new HiloThread();
        HiloThread hilo2 = new HiloThread();

        hilo1.start();
        hilo2.start();


    }

}
