// question : Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
import java.util.Random;

public class A {
    public static void main(String[] args) {
        int[] arr = {1,7,8,9,10,5,20,7,10};
        shuffleArray(arr);
        
        System.out.print("Shuffled array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] arr) {
        Random rand = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
