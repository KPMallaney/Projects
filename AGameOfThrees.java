import java.util.Scanner;


//Dividing if is divisible by 3
//Otherwise +1 or -1

public class AGameOfThrees {

public static void main(String args[])
{
	Scanner keyboard = new Scanner(System.in);

	System.out.println("Enter an Integer less than 1,000,000.");
	int input = keyboard.nextInt();
	
	System.out.println("The value you have entered is: " + input);
	while(input != 1)
	{
		if(input % 3 == 0)
		{
			System.out.println("Value: "+ input + " 0");
			input = input / 3;
		}
		else if(input % 3 == 1)
		{
			System.out.println("Value: " + input + " -1");
			input = (input - 1) / 3;
		}
		else if(input % 3 == 2)
		{
			System.out.println("Value: " + input + " +1");
			input = (input + 1) / 3;
		}
		}
	System.out.println("Value: " + input);
	}








}





