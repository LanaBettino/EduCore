# Writes simple text PDFs (no dependencies). Run: python3 make_pdfs.py
def pdf(path,title,lines):
    esc=lambda s:s.replace("\\","\\\\").replace("(","\\(").replace(")","\\)")
    t="BT /F2 20 Tf 50 790 Td (%s) Tj ET\n"%esc(title)
    y=755
    for l in lines:
        t+="BT /F1 12 Tf 50 %d Td (%s) Tj ET\n"%(y,esc(l));y-=22
    objs=["<</Type/Catalog/Pages 2 0 R>>","<</Type/Pages/Kids[3 0 R]/Count 1>>",
    "<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Contents 4 0 R/Resources<</Font<</F1 5 0 R/F2 6 0 R>>>>>>",
    "<</Length %d>>\nstream\n%sendstream"%(len(t),t),
    "<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>","<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold>>"]
    o=b"%PDF-1.4\n";off=[]
    for i,x in enumerate(objs):off.append(len(o));o+=("%d 0 obj\n%s\nendobj\n"%(i+1,x)).encode("latin-1","replace")
    xr=len(o);o+=("xref\n0 %d\n0000000000 65535 f \n"%(len(objs)+1)).encode()
    for f in off:o+=("%010d 00000 n \n"%f).encode()
    o+=("trailer<</Size %d/Root 1 0 R>>\nstartxref\n%d\n%%%%EOF"%(len(objs)+1,xr)).encode()
    open(path,"wb").write(o)
pdf("guides/nsfas-application-guide.pdf","NSFAS Step-by-Step - EduCore",[
"1. Gather: SA ID, parent/guardian IDs, proof of household income.","2. Create a myNSFAS account on the official NSFAS website.",
"3. Fill in the online form and upload clear scans of your documents.","4. Apply separately to your university or TVET college too.",
"5. Keep your reference number and check your status regularly.","6. Accept your funding offer and sign the agreement.",
"Tip: Never pay anyone to apply. NSFAS applications are free.","Always confirm dates and rules at the official NSFAS website."])
pdf("guides/university-application-guide.pdf","University Applications - EduCore",[
"1. Calculate your APS with the EduCore calculator.","2. Shortlist 3-5 courses and check each admission requirement.",
"3. Note each closing date and any application fee.","4. Apply online and upload certified documents.",
"5. Track every application in your EduCore dashboard.","6. Apply for residence and funding early.",
"Always confirm requirements on the official institution website."])
pdf("guides/bursary-checklist.pdf","Bursary Document Checklist - EduCore",[
"[ ] Certified copy of your ID","[ ] Latest school results","[ ] Proof of household income",
"[ ] Parent/guardian ID copies","[ ] Motivation letter","[ ] Proof of acceptance or application",
"[ ] Bank confirmation letter","[ ] Contact details for two referees"])
