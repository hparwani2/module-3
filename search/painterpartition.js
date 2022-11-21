/*
You are provided with ‘n’ number of boards of 
length [b1, b2,..bn].
There are ‘a’ painters available in the market 
and each painter takes one(1) unit time to paint one(1) unit 
of board. We need to find the minimum time to get the 
job done under the constraints that any painter will 
only paint contiguous sections of the board.
Note: Two painters cannot share boards to paint.

Sample Input: 
walls = [10, 20, 30, 40]        
painters = 2

{10, 20} {30, 40} = 70
{10} {20, 30, 40} = 90
{10, 20, 30} {40} = 60


Sample Output: 
        	60
*/