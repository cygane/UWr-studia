#include <iostream>
using namespace std;

float a(float x){
    return pow(pow(x,3) + sqrt(pow(x,6) + pow(2023,2)),-1);
}

float a_better(float x){
    return (pow(x,3) - sqrt(pow(x,6)+ pow(2023,2))) / pow(2023,2);
}

int main(){
    cout<<"a:"<<endl;
    cout<< a(-100000000)<<endl;
    cout<< a_better(-100000000)<<endl;
}