#include <iostream>
using namespace std;

int a1[26],a2[26];
int main() {
    string s1,s2;
    cin>>s1>>s2;
    for(int i=0;i<s1.size();i++)
        a1[s1[i]-'a']++;
    for(int i=0;i<s2.size();i++)
        a2[s2[i]-'a']++;
    for(int i=0;i<26;i++)
        if(a1[i]<a2[i])
        {
            cout<<"need tree"<<endl;
            return 0;
        }
    if(s1.size()==s2.size())
    {
        cout<<"array"<<endl;
        return 0;
    }
    int j=0;
    for(int i=0;i<s1.size();i++)
        if(s1[i]==s2[j])
            j++;
    if(j==s2.size())
        cout<<"automaton"<<endl;
    else
        cout<<"both"<<endl;
    return 0;
}
