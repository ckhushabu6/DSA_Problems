import java.util.Scanner;
public class FindPrimeNo{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);

    int flag= 0 ;
    while(true){

   System.out.println("Enter the number to check given number is prime or not :");
            int n=sc.nextInt();
        for(int i = 2 ; i<=n/2 ; i++){
            if(n%i==0){
                flag = 1;
            }
            else{
                flag = 0;
            }
        
    }
        if(flag != 1){
            System.out.println("Given number is prime number.");
        } else{
            System.out.println("Given number is not a prime number.");
        }
    }
}
}
