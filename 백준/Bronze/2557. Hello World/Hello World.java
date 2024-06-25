public class Main {
    public String helloWorld() {
        return "Hello World!";
    }
    
    public static void main(String[] args) {
        Main obj = new Main();
        String result = obj.helloWorld();
        System.out.println(result);
    }
}