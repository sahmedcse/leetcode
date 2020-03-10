# Add Two Numbers

## Question

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.

## Problems Faced

I realized the math was pretty easy to grasp. I had problems with getting the data structure to act the way it was required in this question. I did not realize how linked list was working and I kept losing reference of the list from its head. It took me a few hours to realize how the ListNode structure was working and how I could make use of it. After quite a few tweaks I understood how it was working and finally arrived at the solution.
