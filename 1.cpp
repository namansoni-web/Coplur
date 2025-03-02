#include <iostream>
using namespace std;

class Student
{
public:
    string name;
    int age;
    string course;
    int rollno;

    Student(string n, int a, string n1, int a1) : name(n), age(a), course(n1), rollno(a1) {}

    // void setdata(string n, int a, string n1, int a1);

    void getdata()
    {
        cout << " Name: " << name <<endl;
        cout << " Age: " << age << endl;
        cout << " course: " << course << endl;
        cout << " Rollno: " << rollno << endl;
    }
};

int main()

{
     Student person("John", 25, "CSE",668);
     person.getdata();

     Student people("Rohit", 25, "Mech",558);
     person.getdata();

     Student nice("Rahul", 15, "Civil",189);
     person.getdata();

    return 0;
}