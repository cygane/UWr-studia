#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n,a, largest = -1000005;
    cin>>n;
    for(int i = 0; i < n; i++){
        cin>>a;
        int pom = (int)sqrt(a);
        if(a < 0 && a > largest){
            largest = a;
        }
        else {
            if (pom * pom != a && a > largest) {
                largest = a;
            }
        }
    }
    cout<<largest;
}
