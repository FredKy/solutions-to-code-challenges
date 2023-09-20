//for integers from 10**l to less than to 10**r, if all digits in int are the same, add number of digits to SUM, and finally print sum

#include <iostream>
using namespace std;
int main(){int l,r;cin>>l;cin.ignore()>>r;cin.ignore();cout<<(r*r+r-l*l+l)*9/2<<endl;}