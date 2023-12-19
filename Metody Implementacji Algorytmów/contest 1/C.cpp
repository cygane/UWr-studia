#include<bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin>>s;

    long long int a,b,n=s.length();
    cin>>a>>b;
    long long int pref[n+1]={0},suff[n+1]={0};
    long long int pow=1;

    for(int i=n-1;i>=0;i--)
    {
        suff[i]=suff[i+1]+(s[i]-'0')*pow;
        suff[i]%=b;
        pow=(pow*10)%b;
    }
    pref[0]=(s[0]-'0')%a;
    pow=10;
    for(int i=1;i<n;i++)
    {
        pref[i]=(s[i]-'0')+10*pref[i-1];
        pref[i]%=a;
    }

    for(int i=0;i<n-1;i++)
    {
        if(s[i+1]!='0'&&pref[i]==0&&suff[i+1]==0)
        {
            cout<<"YES\n";
            cout<<s.substr(0,i+1)<<"\n";
            cout<<s.substr(i+1);
            return 0;
        }
    }
    cout<<"NO";
    return 0;
}