import java.util.ArrayList;
import java.util.List;

public class EmployeeDriverManager {
   public static void main(String[] args) {
    Employee emp1 = new Employee(101, "Moin", 50000.0);
        Employee emp2 = new Employee(102, "Ramjan", 63000.0);
        Employee emp3 = new Employee(103, "Shubham", 55000.0);

        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        for (Employee emp : employees) {
            emp.displayDetails();
        }
    
   } 
}
