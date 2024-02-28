#include <iostream>
using namespace std;

int pot(long long a, long long b, long long m){

	long long w = 1;
	
	while(b)
	{
		if (b%2) {
			w = (w * a) % m;
        }
			
		a = (a * a) % m;
		b/=2; 
	}
	return w % m;
}

int main(){
    long long t,a,b,c;
    cin>>t;
    for(int i=0; i<t; i++){
        cin>>a>>b>>c;
        cout<<pot(a, b, c)<<'\n';
    }
}