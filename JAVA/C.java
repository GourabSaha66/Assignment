// question: Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z) 

import java.util.HashSet;

public class C {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        
        sentence = sentence.replaceAll(" ", "").toLowerCase();

        HashSet<Character> uniqueLetters = new HashSet<>();
        
        for (char c : sentence.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                uniqueLetters.add(c);
            }
        }
        
        return uniqueLetters.size() == 26;
    }
}

