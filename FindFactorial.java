//Find Factorial of given number...!
import java.util.Scanner;
public class FindFactorial {
   public static void main(String args[]){
    while(true){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number to find factrial : ");
    int n = sc.nextInt();
    int result=1;
    for(int i = n ; i>0 ;i--){
        result= result * i;
    }
    System.out.println("Factorial of given number is "+ result);

    }
   
   }
}
