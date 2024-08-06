// Find Area of Tringle
import java.util.Scanner;
public class AreaOfTringle {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        float length;
        float breath;
        float height;
        float area ;
        System.out.println("Enter length of tringle...");
        length= sc.nextFloat();
        System.out.println("Enter  breath of tringle...");
        breath= sc.nextFloat();
        System.out.println("Enter height of tringle ...");
        height=sc.nextFloat();
        area = length *breath*height;
        System.out.println("Area of tringle " + area );
    }
}
