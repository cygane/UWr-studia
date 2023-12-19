#include <iostream>
#include <vector>
#include <string>
using namespace std;

string bin2rzym (int x){
  string s_rzym;
  const vector<pair<int, string>> rzym = {
    {1000, "M"}, 
    {900, "CM"}, 
    {500, "D"}, 
    {400, "CD"}, 
    {100, "C"},
    {90, "XC"},
    {50, "L"},
    {40, "XL"},
    {10, "X"},
    {9, "IX"},
    {5, "V"},
    {4, "IV"},
    {1, "I"}
  };
  while (x > 0){
    for (int i=0; i<13;i++){
      int ile = 0;
      while (rzym[i].first <= x and ile < 4){
        x -= rzym[i].first;
        ile += 1;
        s_rzym += rzym[i].second;
      }
    }
  }
  return s_rzym;
}

int zamiana (const char *przed){
  int po = stoi(przed);
  return po;
}


int main(int argc, char *argv[]) {
  for(int i=0;i<argc;i++){
    try{
      int liczba = zamiana(argv[i]);
      if(liczba > 0 && liczba < 4000){
        cout << bin2rzym(liczba) << "/n";
       }
      }
      catch(...){
        clog << argv[i] << " jest niepoprawne" << "/n";
      }
  }
  
}