Array.prototype._foreach = function(array,callback)
{
    if(Array.isArray(array))
    {
        for(let i =0;i<array.length;i++)
        {
            callback(array[i], i);
        }
    }

    else
    {
        for(var key in array)
        {
            callback(array[key], key);
        }
    }
    
}

function callback(element,key){
    console.log(element)
}

Array.prototype._map = function(array, callbackMap){
    
    if(Array.isArray(array))
    {
        var result = new Array();
        for(let i =0;i<array.length;i++)
        {
            result[i] = callbackMap(array[i], i);
        }

        return result;
    }

    else
    {
        var resultArray = new Object();
        for(var key in array)
        {
            var result = callbackMap(array[key], key);
            resultArray[key] = result;
        }

        return resultArray;
    }
    
}

Array.prototype._filter = function(array, callbackFilter){
    
    if(Array.isArray(array))
    {
        var result = new Array();
        for(let i =0;i<array.length;i++)
        {
            if(callbackFilter)
                result[i] = array[i];
        }

        return result;
    }

    else
    {
        var resultArray = new Object();
        for(var key in array)
        {
           if(callbackFilter)
            resultArray[key] = resultArray[key];
        }

        return resultArray;
    }
    
}