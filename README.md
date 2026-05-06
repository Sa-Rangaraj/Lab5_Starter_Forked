# Lab 5

[Expose Site](https://sa-rangaraj.github.io/Lab5_Starter_Forked/explore.html)

[Explore Site](https://sa-rangaraj.github.io/Lab5_Starter_Forked/explore.html)


### Question 1 

No, you probably wouldn't use a unit test to test this "message" feature. This is because the feature requires interation with another user, which cannot be simulated / cannot be simulated easily with a unit test alone. This would fall under the "application/feature" level tests, as to test the "message" feature would be to test if all the underlying functions of the feature are working together to produce the expected result. 


### Question 2

Yes. The max messsage length would be one specific attrubute of the greater "message" feature. Thus, it's the appropriate size for a unit test to be effective. Additionally, the max message feature would primarly correspond to a single user - assuming the application refuses to send the message / prohibts further typing rather than concatinating it after sending. Thus, there is no need to simulate 2 users, as the unit test would only have to check the experience of the sender to ensure the limit is working. 
