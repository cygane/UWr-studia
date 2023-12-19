#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int t;
    cin>>t;
    for(int j = 0; j < t;j++){
        int n;
        cin>>n;
        string s;
        cin>>s;
        string res="";
        res+=s[0];
        if(s[0]==s[1]||s[1]>s[0]){
            cout<<res;
            reverse(res.begin(),res.end());
            cout<<res<<endl;


        }
        else{
            for(int i=1;i<n;i++){

                if(s[i]<=s[i-1]){
                    res+=s[i];
                }
                else
                    break;

            }
            cout<<res;
            reverse(res.begin(),res.end());
            cout<<res<<endl;

        }

    }

}
