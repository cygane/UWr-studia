#include <iostream>
using namespace std;
typedef unsigned long long ll;
int main() {
    long long int n,ile;
    cin>>n;
    ile = 1;
    ile=(n*(n-1)*(n-2)*(n-3)*(n-4))/120;
    ile=ile*(n*(n-1)*(n-2)*(n-3)*(n-4));
    cout<<ile<<endl;
}