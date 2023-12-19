#include <iostream>
#include <cstdio>
#include <cstring>
using namespace std;
 
int main() {
   char s[300001];
   long long int ile = 0;
   scanf("%s", s);
   for(int i = 0; i < strlen(s) - 1;i++){
       if(s[i] == '0' || s[i] == '4' || s[i] == '8'){
           ile++;
       }
       if(((s[i] - '0') * 10 + (s[i+1]) - '0') % 4 == 0){
           ile += i + 1;
       }
   }
    if(s[strlen(s) - 1] == '0' || s[strlen(s) - 1] == '4' || s[strlen(s) - 1] == '8'){
        ile++;
    }
    printf("%llu", ile);
}