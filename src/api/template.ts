export const c_plus_template_pref: string = `
#include<iostream>
#include<vector>
#include<list>
#include<deque>
#include<map>
#include<set>
#include<unordered_map>
#include<unordered_set>
#include<stack>
#include<queue>
#include<array>
#include<cmath>
#include<string>
using namespace std;
`

export const c_plus_template_mid: string = `
int function(int a, int b){
    return a+b;
}
`

export const c_plus_template_rear: string = `
int main(){
    int a, b;
    cin>>a>>b;
    cout<<function(a, b);
    return 0;
}
`