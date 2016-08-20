/**
 * FaceController
 *
 * @description :: Server-side logic for managing faces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//TODO : check faces array
//TODO : check id
module.exports = {
    upVote: function(req, res) {
        var id_self     = req.param('id_self');
        var id_opponent = req.param('id_opponent');
        var ranking_self;
        var ranking_opponent;
        Face.find([id_self, id_opponent])
            .then((faces) => {
                ranking_self     = faces[0].rank;
                ranking_opponent = faces[1].rank;

                res.ok();
            })
        // var constant = 15;
        // quote_one = Math.pow(10)

    }

};

