https://www.youtube.com/watch?v=bZef6x9_xEI&t=360s

install app globally
    $ npm i -g @nestjs/cli
    $ nest new project_name

    
    $ cd project-nest
    $ npm run start

app
topics
    controller
    modules
    project

Mutiple frameWorks of NodeJS
    Fastify
    Express
        NestJS based on the above ( it is totally based on OPS)

    src
        app.controller.spec.ts (for testing purpose)
        app.controller.ts
        app.module.ts (app k chota sa part like In react it is called component)
        app.services.ts
        main.ts (jhn sy project run hoga)
    test
        app.e2e-spec.ts(for unit testing) (not for initial use)
        jest-e2e.json (its a library)
    
    nest-cli-json
        (source code kidhar hai)
    
    readme.md
        details explaination
    tsconfig.build.json 
        jb hum build create krty hen to ye configuration run krta hai
    tsconfig.json (important configuration)
        type sy related information
            module: commonjs (konsi related file per ap work kr rhy hen)
            outDir:'./dist' //ye hamari ts file ko js me convert kr k browser ko dyta hai 

            
---------------------------

    $ npm run start

    when we run project their is a dist folder which contain all the files
    that are available in src in "js" form

    inshort dist me "TS" file "JS" me change hojati hai

----------------------------

    ab hamen dekhna hai hamari App kidhar run ho rhi hai to hum main.ts me 
    jayengy, 3000 port per run ho rha hoga

----------------------------

    http://localhost:3000
        'Hello World'
            if I want to edit this text, then I open file app.service.ts and edit their
            But I see change only 
            
            2 way
                1st Restart server 

                2nd Alert: 
                    changes not shown until you run another command 

                    $ npm run start:dev
                    
                    package.json
                        "npm run start:dev" :"nest start --watch"
                    
                    But it is not reflected on WEB until the web page refresh
            

                    


    http://localhost:3000/as  
        
        agar humen easa path access krengy jo exist nhi krta to app crash nhi hogi
        Not FOund dy dyga

    

    16:00
        Controllers
            request by user(Client) and receive in Backend(Controller)
        
        jb ap client side sy koye bhi HTTP request krty ho wo jati hai controller k pass 

        inFile app.controller.ts (Alert)
            @Controller() //is called decorator 1 class hoti hai h jo uski property ko change krta hai
            
    20:00   @Get() //jb me get request kron mujhy us k nichy wala function return krdo 
            

---------------------------- create new Get request with different path

    20:51 in file app.controller.ts

-3***---------------------------24:40 now you have to made multiple controllers external file

    $ nest g controller todo    //this command will create a separate folder of todo 
                                // inside "src" with having file of todo 

    ./todo  
        todo.controller.spec.ts (not in used because it is used for testing)
        todo.controller.ts 

    Alert-Know:
        Hum us file me koye bhi route create krengy us k controller
        'app.module.ts' me import ho kr k connect hojata hai 


28:00    //app.module.ts

        @Module(
            {
                import: [],
                controller:[] //multiple controller, Ap ki App me jitne controllers hongy wo sb yhn import hongy, jo bhi logic hai wo bhi yhn 
                providers:[] //AllServices will be here, jhn ap calculation kro
            }
        )

//4****----------------------    
31:10  //app.service.ts
            (jo logic hoti hai wo yhn handle hogi)
            (koye bhi data send krna hai ya receive krna hai)


        Is me humne 1 service banaya hai app.service me or usy humne todo.controller.ts
        me access kr rhy hen. q k wo service worker app.module.ts k provider me add hai
    

        NOW we create our own service using command
//5*****---------------------
    34:20
        $ nest g service todo

        //todo.service, app.module, todo.controller

//6*****---------------------

    Providers (jitna bhi logics hoty hen wo yhn aty hen)
    
//7*****---------------------
    35:36


    Module (ap k pass 10-12 modules hon too ap unhen app.module.ts me btado ye mere multiple modules hen)

        $ nest g module todo  (ye command apko 1 module generate kr k dy dyga )
            {
                Alert
                ye 1 file create kryga module or 
                app.module.tsx me us module ko import dyga 
            }
        
    //ab humne Todo k bhi Module bana liya hai, too ab humne jo bhi chezen todo ki 
    //app.module.tsx me import(TodoController,TodoService) kiya tha usy hata kr k 
    //todo.module.ts me direct import kro 


//8*****---------------------complex start

    37:00
       routing
       post, (39:00 file -->          todo.controller.ts)

//9*****---------------------complex start
https://docs.nestjs.com/pipes#class-validator

    validation (42:10 --> todo.dto.ts )
        
        jb ap 'main.ts' likhengy too terminal me warnings ayengy, wo library apne install krni hogi            
          "app.useGlobalPipes(new ValidationPipe())" <---- main.ts
        
        library
            npm i class-validator
            npm i class-transformer

//10*****---------------------complex start CRUD operation
45;00
    post, 48:00
    get,  50:00
    put,  52:00
    delete, 57:00
    patch,

       file rendering,        

//11*****---------------------Middleware
https://docs.nestjs.com/middleware
59:40
    middleware( 1 barrier jo apka action triger hone waly ap k tokken ko verify kry)
    like we create tokens through JWT

    $nest g --help ( yhn apko chart show jo apne package install krne hen,)(is k liye ap k pc me npm i -g @nestjs/cli install hone chahiye)
    
    $nest g mi "authentication_middleware" (now auth-middleware created)

