#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// C++ program to find maximum amount of water that can
// be trapped within given set of bars.
#include <bits/stdc++.h>
using namespace std;

int findWater(int arr[], int n)
{
	// left[i] contains height of tallest bar to the
	// left of i'th bar including itself
	int left[n];

	// Right [i] contains height of tallest bar to
	// the right of ith bar including itself
	int right[n];

	// Initialize result
	int water = 0;

	// Fill left array
	left[0] = arr[0];
	for (int i = 1; i < n; i++)
		left[i] = max(left[i - 1], arr[i]);

	// Fill right array
	right[n - 1] = arr[n - 1];
	for (int i = n - 2; i >= 0; i--)
		right[i] = max(right[i + 1], arr[i]);

	// Calculate the accumulated water element by element
	// consider the amount of water on i'th bar, the
	// amount of water accumulated on this particular
	// bar will be equal to min(left[i], right[i]) - arr[i] .
	for (int i = 1; i < n-1; i++)
	{
	int var=min(left[i-1],right[i+1]);
	if(var > arr[i])
	{
		water += var - arr[i];
	}
	}
		

	return water;
}

// Driver program
int main()
{
	int n; // Width
    cin >> n; cin.ignore();
	int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i]; cin.ignore();
    }
	cout<< findWater(arr, n);
	return 0;
}
