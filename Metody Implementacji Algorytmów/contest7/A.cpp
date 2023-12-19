#include <iostream>
using namespace std;
 
int main() {
   int q,skonczony;
   cin>>q;
   string s;
   string t;
   for(int i = 0; i < q;i++){
       cin>>s;
       cin>>t;
       skonczony = 1;
       for(int j = 0;j < t.size();j++){
           if (t[j] == 'a' && t.size() > 1){
               skonczony = 0;
               break;
           }
       }
       if(skonczony == 0){
           cout<<-1<<endl;
       }
       else {
           if (t.size() == 1 && t[0] == 'a') {
               cout << 1 << endl;
           } else {
               long long int ile = 1;
               for (int j = 0; j < s.size(); j++) {
                   ile *= 2;
               }
               cout << ile << endl;
           }
       }
   }
}