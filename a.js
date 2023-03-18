const express = require("express");
const app = express()
const User = require("./model/User");
const bus = require("./model/bus");
const Admin = require("./model/Admin");
const Taxi = require("./model/Taxi");
const Motor = require("./model/Motor");
const Covoiturage = require("./model/Covoiturage");
const Comment = require("./model/Comment");



app.set('view engine', 'ejs')

const bodyParser = require('body-parser');
const { default: mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public/img"));
app.use(express.static("public/css"));











app.get('/list', function(req, res) {
    res.render("list.ejs")
});



app.get('/signin', function(req, res) {
    res.render("signin.ejs")
});
app.get('/signup', function(req, res) {
    res.render("signup.ejs")
});
app.get('/first', function(req, res) {
    res.render("first.ejs")
});


app.get('/error', function(req, res) {
    res.render("error.ejs")
});



app.get('/tablebus', function(req, res) {
    res.render("tablebus.ejs")
});
app.get('/reserverbus', function(req, res) {
    res.render("reserverbus.ejs")
});


app.get('/Userreservation', function(req, res) {
    res.render("Userreservation.ejs")
});


app.get('/signUPadmin', function(req, res) {
    res.render("signUPadmin.ejs")
});
app.get('/signINadmin', function(req, res) {
    res.render("signINadmin.ejs")
});
app.get('/errorAdmin', function(req, res) {
    res.render("errorAdmin.ejs")
});
app.get('/invalidgmail', function(req, res) {
    res.render("invalidgmail.ejs")
});
app.get('/invalidadmin', function(req, res) {
    res.render("invalidadmin.ejs")
});





app.get('/imageBus', function(req, res) {
    res.render("imageBus.ejs")
});
app.get('/imageCovoiturage', function(req, res) {
    res.render("imageCovoiturage.ejs")
});
app.get('/imageTaxi', function(req, res) {
    res.render("imageTaxi.ejs")
});
app.get('/imageMotor', function(req, res) {
    res.render("imageMotor.ejs")
});




app.get('/bienreserverBus', async(req, res) => {
    const data = await bus.find()
    res.render('bienReserver', { data: data })
})
app.get('/bienreserverTaxi', async(req, res) => {
    const data = await bus.find()
    res.render('bienreserverTaxi', { data: data })
})

app.get('/bienreserverMotor', async(req, res) => {
    const data = await bus.find()
    res.render('bienreserverMotor', { data: data })
})
app.get('/bienreserverCovoiturage', async(req, res) => {
    const data = await bus.find()
    res.render('bienreserverCovoiturage', { data: data })
})
app.get('/users', async(req, res) => {
    const data = await User.find()
    res.render('users', { data: data })
})




app.get('/reserverudatet', (req, res) => {
    bus.find({}, (err, items) => {
        res.render('reserverudatet.ejs', { bus: items })
    })
})










app.get('/showtableCovoiturage', async(req, res) => {
    const data = await Covoiturage.find()
    res.render('showtableCovoiturage', { data: data })
})


app.get('/showtableMotor', async(req, res) => {
    const data = await Motor.find()
    res.render('showtableMotor', { data: data })
})
app.get('/showtableTaxi', async(req, res) => {
    const data = await Taxi.find()
    res.render('showtableTaxi', { data: data })
})


app.get('/showcomment', async(req, res) => {
    const data = await Comment.find()
    res.render('showcomment', { data: data })
})








app.get('/tablecovoiturage', function(req, res) {
    res.render("tablecovoiturage.ejs")
});
app.get('/reservercovoiturage', function(req, res) {
    res.render("reservercovoiturage.ejs")
});
app.get('/Userexist', function(req, res) {
    res.render("Userexist.ejs")
});

app.get('/UserexistAdmin', function(req, res) {
    res.render("UserexistAdmin.ejs")
});



app.get('/reserverTaxi', function(req, res) {
    res.render("reserverTaxi.ejs")
});




app.get('/tableMotor', function(req, res) {
    res.render("tableMotor.ejs")
});
app.get('/reserverMotor', function(req, res) {
    res.render("reserverMotor.ejs")
});

app.get('/comment', function(req, res) {
    res.render("comment.ejs")
});
app.get('/commentvalid', function(req, res) {
    res.render("commentvalid.ejs")
});





app.get('/tableTaxi', async(req, res) => {
    const data = await Taxi.find()
    res.render('tableTaxi', { data: data })
})


app.get('/editBus/bus/:id', function(req, res) {
    mongoose.model("bus").findOne({ _id: req.params.id }, (err, items) => {
        res.render('editBus.ejs', { id: items._id, Prenom: items.Prenom, Nom: items.Nom, Matricule: items.Matricule, Tele: items.Tele, PdP: items.PdP, PdA: items.PdA, ligne: items.ligne, adressselect: items.adressselect, GareEuromed: items.GareEuromed, bensoudaEuromed: items.bensoudaEuromed, ouadFesEuromed: items.ouadFesEuromed })
    })
})






app.get('/editTaxi/Taxi/:id', function(req, res) {
    mongoose.model("Taxi").findOne({ _id: req.params.id }, (err, items) => {
        res.render('editTaxi.ejs', { id: items._id, Prenom: items.Prenom, Nom: items.Nom, Matricule: items.Matricule, Tele: items.Tele, HdP: items.HdP, Destination: items.Destination, num: items.num })
    })
})


app.get('/editMotor/Motor/:id', function(req, res) {
    mongoose.model("Motor").findOne({ _id: req.params.id }, (err, items) => {
        res.render('editMotor.ejs', { id: items._id, Prenom: items.Prenom, Nom: items.Nom, Matricule: items.Matricule, Tele: items.Tele, H: items.H, num: items.num })
    })
})


app.get('/editUser/User/:id', function(req, res) {
    User.findOne({ _id: req.params.id }, (err, items) => {
        res.render('editUser.ejs', { id: items._id, Matricule: items.Matricule, Prenom: items.Prenom, name: items.name, Tele: items.Tele, email: items.email, password: items.password, Adress: items.Adress })
    })
})





app.get('/editCovoiturage/Covoiturage/:id', function(req, res) {
    Covoiturage.findOne({ _id: req.params.id }, (err, items) => {
        res.render('editCovoiturage.ejs', { id: items._id, Prenom: items.Prenom, Nom: items.Nom, Matricule: items.Matricule, Tele: items.Tele, Tarif: items.Tarif, HdP: items.HdP, HdA: items.HdA, PdR: items.PdR, Conditions: items.Conditions, offre: items.offre })
    })
})


app.get('/listAdmin', function(req, res) {
    res.render("listAdmin.ejs")
});
app.get('/biensignuP', function(req, res) {
    res.render("biensignuP.ejs")
});
app.get('/biensignuPadmin', function(req, res) {
    res.render("biensignuPadmin.ejs")
});







app.post("/signup", (req, res) => {
    const { name, email, Prenom, Tele, adressselect, Matricule, password, Adress } = req.body
    const re = /^[a-zA-Z0-9+_.-]+@+gmail.com+$/;
    if (re.test(email)) {
        User.findOne({ email: email }, (err, user) => {
            if (user) {
                res.render("Userexist.ejs")
            } else {
                const user = new User({ name, email, password, Tele, Prenom, adressselect, Matricule, Adress })
                user.save(err => {
                    if (err) {
                        res.send(err.message)
                    } else {
                        res.render("biensignuP.ejs")
                    }
                })
            }
        })
    } else {
        res.render("invalidgmail.ejs")

    }

})
app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.render("list.ejs")
            } else {
                res.render("error.ejs")
            }
        } else {
            res.render("error.ejs")
        }
    })
});

app.post('/comment', function(req, res) {
    const { comment, comment2, comment3, comment4 } = req.body

    const ccomment = new Comment({ comment, comment2, comment3, comment4 })
    ccomment.save(err => {
        if (err) {
            res.send(err.message)
        } else {
            res.render("commentvalid.ejs")
        }
    })

});







app.post("/signUPadmin", (req, res) => {
    const { name, email, Prenom, Tele, password } = req.body;
    const re = /^[a-zA-Z0-9+_.-]+@+admin.com+$/;
    if (re.test(email)) {
        Admin.findOne({ email: email }, (err, admin) => {
            if (admin) {
                res.redirect("/UserexistAdmin")
            } else {
                const admin = new Admin({ name, email, password, Tele, Prenom })
                admin.save(err => {
                    if (err) {
                        res.send(err.message)
                    } else {
                        res.render("biensignuPadmin.ejs")
                    }
                })
            }
        })
    } else {
        res.render("invalidadmin.ejs")


    }
})
app.post("/signINadmin", (req, res) => {
    const { email, password } = req.body;
    Admin.findOne({ email: email }, (err, admin) => {
        if (admin) {
            if (password === admin.password) {
                res.redirect("/listAdmin")
            } else {
                res.render("errorAdmin.ejs")
            }
        } else {
            res.render("errorAdmin.ejs")
        }
    })
});

app.listen(3000, () => {
    console.log("Server is Running")
})
app.post("/reserverbus", (req, res) => {
    const { Nom, Prenom, Tele, Euromed, Matricule, PdA, PdP, adressselect, ligne } = req.body;
    bus.findOne({ Matricule: Matricule }, (err, Bus) => {
        if (Bus) {

            res.render("Userreservation.ejs")
        } else {
            const Bus = new bus({ Nom, Prenom, Tele, Euromed, Matricule, PdA, PdP, adressselect, ligne })
            Bus.save(err => {
                if (err) {
                    res.send(err.message)
                } else {

                    res.render("bienreserverBus.ejs")
                }
            })
        }
    })

})
app.post("/reservercovoiturage", (req, res) => {
    const { Nom, email, Prenom, Tele, Tarif, Matricule, HdA, HdP, PdR, Conditions, offre } = req.body;
    Covoiturage.findOne({ Tele: Tele }, (err, covoiturage) => {
        if (covoiturage) {
            res.render("Userreservation.ejs")
        } else {
            const covoiturage = new Covoiturage({ Nom, email, Prenom, Tele, Tarif, Matricule, HdA, HdP, PdR, Conditions, offre })
            covoiturage.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.render("bienreserverCovoiturage.ejs")
                }
            })
        }
    })
})
app.post("/reserverTaxi", (req, res) => {
    const { Nom, Prenom, Tele, Matricule, HdP, Destination, num } = req.body;
    Taxi.findOne({ Tele: Tele }, (err, taxi) => {
        if (taxi) {
            res.render("Userreservation.ejs")
        } else {
            const taxi = new Taxi({ Nom, Prenom, Tele, Matricule, HdP, Destination, num })
            taxi.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.render("bienreserverTaxi.ejs")
                }
            })
        }
    })
})
app.post("/reserverMotor", (req, res) => {
    const { Nom, Prenom, Tele, Matricule, H, num } = req.body;
    Motor.findOne({ Tele: Tele }, (err, motor) => {
        if (motor) {
            res.render("Userreservation.ejs")
        } else {
            const motor = new Motor({ Nom, Prenom, Tele, Matricule, H, num })
            motor.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.render("bienreserverMotor.ejs")
                }
            })
        }
    })
})
app.get('/delete/bus/:id', function(req, res) {
    mongoose.model("bus").remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/reserverudatet')
    });

})
app.get('/delete/Taxi/:id', function(req, res) {
    mongoose.model("Taxi").remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/showtableTaxi')
    });

})
app.get('/delete/Covoiturage/:id', function(req, res) {
    Covoiturage.remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/showtableCovoiturage')
    });

})
app.get('/delete/Motor/:id', function(req, res) {
    mongoose.model("Motor").remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/showtableMotor')
    });

})

app.get('/delete/comment/:id', function(req, res) {
    Comment.remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/showcomment')
    });

})

app.get('/delete/User/:id', function(req, res) {
    User.remove({ _id: req.params.id }, function(err, delData) {
        res.redirect('/users')
    });

})


app.get('/edit/:id', (req, res, next) => {
    bus.findOne({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
        if (err) {
            next(err);

        } else {
            res.redirect("/editBus/bus/" + req.params.id)
        }
    });
});
app.post('/edit/:id', (req, res, next) => {

    bus.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
        if (err) {
            next(err);

        } else {

            res.redirect("/reserverudatet")
        }
    });
});


app.get('/edit/User/:id', (req, res, next) => {

    User.findOne({ _id: req.params.id }, req.body, { new: true }, (err, data) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {
            res.redirect("/editUser/User/" + req.params.id)
        }
    });
});
app.post('/edit/User/:id', (req, res, next) => {

    User.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {

            res.redirect('/users')
        }
    });
});


app.get('/edit/Taxi/:id', (req, res, next) => {

    Taxi.findOne({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {
            res.redirect("/editTaxi/Taxi/" + req.params.id)
        }
    });
});
app.post('/edit/Taxi/:id', (req, res, next) => {

    Taxi.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {

            res.redirect('/showtableTaxi')
        }
    });
});



app.get('/edit/Motor/:id', (req, res, next) => {

    Motor.findById({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {
            res.redirect('/editMotor/Motor/' + req.params.id)
        }
    });
});
app.post('/edit/Motor/:id', (req, res, next) => {

    Motor.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {

            res.redirect('/showtableMotor')
        }
    });
});


app.get('/edit/Covoiturage/:id', (req, res, next) => {

    Covoiturage.find({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {
            res.redirect('/editCovoiturage/Covoiturage/' + req.params.id)
        }
    });
});
app.post('/edit/Covoiturage/:id', (req, res, next) => {

    Covoiturage.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
        if (err) {
            consol.log('df')
            next(err);

        } else {

            res.redirect('/showtableCovoiturage')
        }
    });
});