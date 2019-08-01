# Writng Algorithms

Applied to code, an algorithm is just a function that transforms a certain input data structure into a certain output data structure. The logic inside decides the transformation.

First and foremost, the inputs and outputs should clearly be defined, ideally, as unit tests. This requires fully understanding the problem at hand, which is not to be underestimated, because a thorough analysis of the problem can surface the solution naturally, without needing to write any code.

Once the problem domain is thoroughly grasped, brainstorming of the solution space can begin. What variables will be needed? How many loops and what kinds? Are there any clever built-in methods that can help? Edge cases to consider? Complex or repeated logic can be difficult to read and understand. 

Can helper functions be extracted or abstracted? An algorithm usually needs to be scalable. As input sizes grow, how will the function perform? Should there be some kind of caching mechanisms? Generally, memory optimizations (space) will need to be sacrificed for performance gains (time).

Finally, think about re-factoring and modularising at a stage